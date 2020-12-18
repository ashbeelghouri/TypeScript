class NumberHolder{
    value: number;
}
class StringHolder{
    value: string;
}
class BooleanHolder{
    value: boolean;
}


class ValueHolder<TypeForValueProperty>{
    value: TypeForValueProperty;
}


const numberHolder = new ValueHolder<number>();

numberHolder.value = 10;