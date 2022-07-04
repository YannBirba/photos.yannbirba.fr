import { type QueryKey, useMutation, useQueryClient } from "react-query";

const useMutate = <Type = unknown>(
    data: Type,
    queryFunction: Promise<any>,
    queryKey: QueryKey,
) => {
    const queryClient = useQueryClient();

    const { isLoading, isSuccess, isError, reset, mutate } = useMutation(
        async (data) => {
            e.preventDefault();
            const data: Type = e.target.value;
            await queryFunction;
        },
        {
            onMutate: async (data) => {
                await queryClient.cancelQueries(queryKey);
                // pour éviter de faire de la merde pendant qu'on mute les données
                const previousData = queryClient.setQueryData(queryKey, data);
                queryClient.setQueryData(queryKey, (data: any) => {
                    data.map((item: any) =>
                        item.id === data.id ? { ...data } : item,
                    );
                });
                return { previousData };
            },
            onError: (error, _, context) => {
                queryClient.setQueryData(queryKey, context?.previousData);
            },
        },
    );

    return { isLoading, isSuccess, isError, reset, mutate };
};

export default useMutate;
