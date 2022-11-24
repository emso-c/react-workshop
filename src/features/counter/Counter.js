import React from 'react'
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';

function Counter() {
    return (
        <div style={styles.container}>
            <Button up />
            <Text Text={5}/>
            <Button down />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '2rem'
    }
}

export default Counter