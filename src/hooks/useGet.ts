import { type QueryKey, useQuery } from "react-query";

const useGet = (
    queryFunction: Promise<any>,
    staleTime?: number,
    onSuccess?: ((data: any) => void) | undefined,
) => {
    const queryKey: QueryKey = ["currentUser"];
    const { isLoading, data, error, isSuccess, isError, refetch, isFetching } =
        useQuery(queryKey, () => queryFunction, {
            staleTime: staleTime,
            onSuccess: onSuccess,
        });
    const errors = error as any;

    return {
        isLoading,
        isSuccess,
        isError,
        isFetching,
        data,
        errors,
        queryKey,
        refetch,
    };
};

export default useGet;
