export const useGetSanitySingleById = (schemaType: string, id: string) => {
    const query = groq`*[_type == $_type && _id == $_id][0]`
    const { data, refresh } = useSanityQuery(query, { _type: schemaType, _id: id, })
    return data;
}
