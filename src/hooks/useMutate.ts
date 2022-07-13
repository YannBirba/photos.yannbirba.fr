import { type QueryKey, useMutation, useQueryClient } from "react-query";

const useMutate = <T>(
    queryKey: QueryKey,
    queryFunction: (data: T) => Promise<T>,
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void,
    onMutate?: (data: T) => void,
) => {
    const queryClient = useQueryClient();

    const { isLoading, isSuccess, isError, error, reset, mutateAsync, mutate } =
        useMutation(
            async (data: T) => {
                return await queryFunction(data);
            },
            {
                onMutate: async (data: T) => {
                    await queryClient.cancelQueries(queryKey);
                    const previousData = await queryClient.getQueryData<T>(
                        queryKey,
                    );
                    if (previousData) {
                        queryClient.setQueryData<T>(queryKey, {
                            ...previousData,
                            data: (previousData as any).data.filter((d: T) => {
                                return d !== data;
                            }),
                        });
                    }
                    if (onMutate && isSuccess) {
                        onMutate(data);
                    }
                    return { previousData };
                },
                onSuccess: async (data: any) => {
                    if (onSuccess) {
                        onSuccess(data);
                    }
                },

                onError: (error, _, context) => {
                    queryClient.setQueryData(queryKey, context?.previousData);
                    if (onError) {
                        onError(error);
                    }
                },
            },
        );

    // const { isLoading, isSuccess, isError, reset, mutate } = useMutation(
    //     async () => {
    //         // data.preventDefault();
    //         // const data = data.target.value;
    //         await queryFunction(typedData);
    //     },
    //     {
    //         onMutate: async () => {
    //             await queryClient.cancelQueries(queryKey);
    //             const previousData: T = queryClient.setQueryData(
    //                 queryKey,
    //                 typedData,
    //             );
    //             queryClient.setQueryData(queryKey, (data: any) => {
    //                 data.map((item: any) =>
    //                     item.id === data.id ? { ...data } : item,
    //                 );
    //             });
    //             return { previousData };
    //         },
    //         onError: (error, _, context) => {
    //             queryClient.setQueryData(queryKey, context?.previousData);
    //         },
    //     },
    // );

    return { isLoading, isSuccess, isError, error, reset, mutateAsync, mutate };
};

export default useMutate;
