interface MyApiData{
    idStation: number,
    location_station: string,
    system_station: string,
    stationName: string
}
interface MyApiResponse<T>{
    data: T[];
}
