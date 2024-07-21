export const useGetSanitySchema = (schemaType: string) => {
    const query = groq`*[_type == $_type]`
    const { data, refresh } = useSanityQuery(query, { _type: schemaType })
    return data;
}
