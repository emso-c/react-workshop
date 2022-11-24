import React from 'react'
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';

function Counter() {
    return (
        <>
            <Button up />
            <br></br>
            <Text Text={5}/>
            <br></br>
            <Button down />
        </>
    )
}

export default Counter