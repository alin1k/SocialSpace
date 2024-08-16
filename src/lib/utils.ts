export const isSearchParamsEmpty = (searchParams: {tags? : string, search? : string}) : boolean =>{
  return (
    searchParams &&
    Object.keys(searchParams).length === 0
  )
}