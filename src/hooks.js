import { useState, useEffect } from "react";

function useFetch(methodAPI, params = {}) {
    const [parameters, setParams] = useState(params);
    const [data, setData] = useState({});
    useEffect(() => {
        methodAPI(parameters)
            .then(json => {
                setData(json);
            })
            .catch(error => {
                setData({ errorCode: error });
            });
    }, [parameters]);
    return [data, setParams];
}

function loadList(methodAPI, params = {}) {
    const [data, setData] = useState({
        params: params,
        isEnd: false,
        page: 1,
        data: {},
        list: []
    });
    useEffect(() => {
        methodAPI({ ...data.params, page: data.page })
            .then(json => {
                if (json.totalCount === data.list.length) setData(
                    { ...data, isEnd: true });
                else {
                    if (data.isEnd) setData({ ...data, isEnd: false });
                    setData({
                        ...data,
                        data: json,
                        list: [...(data.page === 1 ? [] : data.list), ...json.items]
                    });
                }
            })
            .catch(error => {
                setData({
                    ...data,
                    data: { errorCode: error },
                });
            });
    }, [data.page, data.params]);

    const setParams = (newParams) => {
        setData({
            ...data,
            params: newParams,
            page: 1
        });
    };

    const loadMore = () => {
        if (!data.isEnd) setData({
            ...data,
            page: (data.page + 1)
        });
    };

    return [data.list, loadMore, { setParams, data: data.data }];
}

export { useFetch, loadList };