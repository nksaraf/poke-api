import Head from 'next/head'

import { GraphQLIDE } from '@magiql/ide';
export default function Home() {
    return (
        <GraphQLIDE schemaConfig={{ uri: typeof window === 'undefined' ? '' : 'https://' + window.location.host + '/api/graphql' }} />
    )
}
