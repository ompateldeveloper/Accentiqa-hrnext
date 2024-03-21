// useQueryParam.js
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParam = (paramName, initialValue) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(paramName) || initialValue;
  const [stateValue, setStateValue] = useState(paramValue);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, stateValue);
    setSearchParams(params);
  }, [paramName, stateValue, setSearchParams, searchParams]);

  const setQueryParam = (value) => {
    setStateValue(value);
  };

  return [stateValue, setQueryParam];
};

export default useQueryParam;
