export const useGetSanitySingleBySlug = (schemaType: string, slug: string) => {
    const query = groq`*[_type == $_type && slug.current == $_slug][0]{
      ...,
      "techStackDetails": techStack[]->{
        ...,
      }
    }`
    const { data, refresh } = useSanityQuery(query, { _type: schemaType, _slug: slug, })
    return data;
}
