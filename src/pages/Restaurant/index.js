import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import SearchBar from '../../components/SearchBar'
import useResult from '../../hooks/useResult';
import ResultList from '../../components/ResultList'
const index = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage] = useResult();

    if (results == null) {
        return <Text>Error lurd</Text>;
    }

    return (
        <View style={{ backgroundColor: '#121212', flex: 1 }}>
            <StatusBar barStyle="ligth-content" backgroundColor="#121212" />
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermEnd={() => { }}
            />

            {errorMessage ? <Text>Oops something went wrong</Text> : null}
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <ResultList
                    title='Marvel'
                    results={results.marvel}
                />
                <ResultList
                    title='Disney'
                    results={results.disney}
                />
                <ResultList
                    title='Harry Potter'
                    results={results['harry potter']}
                />
                <ResultList
                    title='Local Pride'
                    results={results.indonesia}
                />
            </ScrollView>
        </View>
    )

}

export default index

const styles = StyleSheet.create({})
