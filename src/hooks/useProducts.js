import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';

const normalizeProduct = (product, language) => {
  const translation = product.product_translations?.[0] || {};
  const teaTranslations = product.tea_translations || [];
  const spiceTranslations = product.spice_translations || [];
  const grainDetails = product.grain_details?.[0] || product.grain_details || {};
  const grainTranslations = product.grain_translations || [];
  const teaTranslation =
    language && teaTranslations.length
      ? teaTranslations.find((item) => item.language === language) || {}
      : teaTranslations[0] || {};
  const spiceTranslation =
    language && spiceTranslations.length
      ? spiceTranslations.find((item) => item.language === language) || {}
      : spiceTranslations[0] || {};
  const grainTranslation =
    language && grainTranslations.length
      ? grainTranslations.find((item) => item.language === language) || {}
      : grainTranslations[0] || {};
  const image = product.main_image || product.image || null;
  const images = image ? [image] : [];

  return {
    ...product,
    image,
    images,
    name: translation.name || '',
    description: translation.description || '',
    tea_type: teaTranslation.tea_type || null,
    leaf_type: teaTranslation.leaf_type || null,
    form: spiceTranslation.form || grainTranslation.form || grainDetails.form || null,
    origin:
      teaTranslation.origin ||
      spiceTranslation.origin ||
      grainTranslation.origin ||
      grainDetails.origin ||
      null,
  };
};

const buildProductsQuery = (language, includeDetailTranslations = false) => {
  const selectFields = [
    'id',
    'price',
    'category',
    'subcategory',
    'weight_grams',
    'main_image',
    'instock',
    'product_translations!inner(language, name, description)',
  ];

  if (includeDetailTranslations) {
    selectFields.push('tea_translations!left(language, tea_type, leaf_type, origin)');
    selectFields.push('spice_translations!left(language, form, origin)');
    selectFields.push('grain_details!left(form, origin)');
    selectFields.push('grain_translations!left(language, form, origin)');
  }

  let query = supabase
    .from('products')
    .select(selectFields.join(', '), { count: 'exact' })
    .eq('product_translations.language', language);

  return query;
};

export const fetchProducts = async ({ language, featured, limit }) => {
  let query = buildProductsQuery(language, false);

  if (typeof featured === 'string' && featured.trim()) {
    query = query.eq(featured, true);
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  if (error) {
    return { data: [], error };
  }

  return { data: data.map((item) => normalizeProduct(item, language)), error: null };
};

export const fetchProduct = async ({ language, id, sku }) => {
  let query = buildProductsQuery(language, true);

  if (id) {
    query = query.eq('id', id);
  }

  if (sku) {
    query = query.eq('sku', sku);
  }

  const { data, error } = await query.maybeSingle();
  if (error) {
    return { data: null, error };
  }

  return { data: data ? normalizeProduct(data, language) : null, error: null };
};

export const useProducts = ({
  language,
  featured = false,
  limit,
  id,
  sku,
} = {}) => {
  const [data, setData] = useState(id || sku ? null : []);
  const [loading, setLoading] = useState(Boolean(language));
  const [error, setError] = useState(null);

  const params = useMemo(() => ({ language, featured, limit, id, sku }), [language, featured, limit, id, sku]);

  useEffect(() => {
    if (!params.language) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    const run = async () => {
      const response = params.id || params.sku
        ? await fetchProduct(params)
        : await fetchProducts(params);

      if (!isMounted) return;

      setData(response.data);
      setError(response.error);
      setLoading(false);
    };

    run();

    return () => {
      isMounted = false;
    };
  }, [params]);

  return { data, loading, error };
};
