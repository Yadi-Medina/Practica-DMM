import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      setResult(eval(result).toString());
    } else if (value === 'CE') {
      setResult('');
    } else if (value === 'C') {
      setResult(result.slice(0, -1));
    } else if (value === '%') {
      setResult((eval(result) / 100).toString());
    } else if (value === '√') {
      setResult(Math.sqrt(eval(result)).toString());
    } else {
      setResult(result + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{result || display}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('CE')}>
          <Text style={styles.buttonText}>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('√')}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleButtonPress('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7cac9',
  },
  display: {
    fontSize: 36,
    marginBottom: 20,
    padding: 10,
    textAlign: 'right',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor:'#f0f0f0',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  buttonOperator: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: '#84b6f4',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});