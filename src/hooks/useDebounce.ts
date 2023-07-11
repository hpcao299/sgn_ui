import { useEffect, useState } from 'react';

interface UseDebounceProps {
    value: unknown;
    milliSeconds: number;
}

export const useDebounce = (props: UseDebounceProps) => {
    const { value, milliSeconds } = props;
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, milliSeconds);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, milliSeconds]);

    return debouncedValue;
};
