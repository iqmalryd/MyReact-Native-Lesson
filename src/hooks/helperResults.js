import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const [results, useResults] = useState(null)
const [error, setError] = useState(false)

const results = async (title) => {
    const data = new Object;
    try {
        const response = await Axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: "5c4ea646",
                s: title
            }
        })
        data[title] = response.data.Search
        useResults(response.data.Search)
    } catch {
        setError(true)
    }

}

export default helperResults

const styles = StyleSheet.create({})
