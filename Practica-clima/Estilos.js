import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherContainer: {
        flex: 1,
        padding: 5,
    },
    currentWeatherContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    currentWeatherText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    currentWeatherIcon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    forecastContainer: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#d4eafc',
    },
    forecastText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    forecastIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#007bff',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        color: '#f21f26', 
    },
    forecastTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007bff', 
    },
});

