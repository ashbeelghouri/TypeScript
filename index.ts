class ValueHolder<T>{
    value: T;
}

const numberWrapper = (value:number): number[] => {
    return [value];
};


const valueWrapper = <T>(value: T): T[]=>{
    return [value];
};

valueWrapper<number>(10);