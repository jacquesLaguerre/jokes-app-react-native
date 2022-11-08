import {Text} from 'react-native'
import styles from '../styles'

export default function PunchLine({punchline}) {
    return (
        <Text style={styles.punchline}>{punchline}</Text>
    )
}