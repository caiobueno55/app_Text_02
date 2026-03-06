import React from 'react';
import {View, Text} from 'react-native';

function App(){
  return(
  
 <View style={{backgroundColor: 'blue', paddingHorizontal: 30}}>
  
   <View style={{ backgroundColor: 'green', 
        height: 100, 
        borderColor: 'black',
        borderWidth: 5, 
        
        paddingHorizontal: 10,
        paddingVertical: 100 }}>
  <Text style={{fontSize: 30, fontFamily: 'bold' }}>Olá boa noite {'\n'}Professor Luis Corcini
{'\n'}</Text>
  
  
  </View>
   <View style={{ backgroundColor: 'yellow', height: 100, 
        backgroundColor: 'yellow', 
        borderColor: 'black',
        borderWidth: 5,
        paddingHorizontal: 30,
        paddingVertical: 100 }}>

  <Text style={{fontSize: 16, fontFamily: 'Bernard MT Condensed' }}>Todos esses que aí estão{'\n'}
Atravancando meu caminho,{'\n'}
Eles passarão...{'\n'}
Eu passarinho!{'\n'}</Text>
  </View>

  <View style={{ backgroundColor: 'grey', height: 100, 
        backgroundColor: 'grey', 
        borderColor: 'black',
        borderWidth: 5,
        paddingHorizontal: 50,
        paddingVertical: 100 }}> 
  <Text style={{fontSize: 16, fontFamily: 'italic' }}> 
   <Text>Manuel Bandeira</Text>{'\n'}
    Andorinha lá fora está dizendo:{'\n'}
— Passei o dia à toa, à toa!{'\n'}
Andorinha, andorinha, minha cantiga é mais triste!{'\n'}
Passei a vida à toa, à toa...{'\n'}</Text>

  </View>

   <View style={{ backgroundColor: 'grey', height: 100, 
        backgroundColor: 'white', 
        borderColor: 'black',
        borderWidth: 5,
        paddingHorizontal: 80,
        paddingVertical: 100
        }}> 
  <Text style={{fontSize: 23, fontFamily: 'italic' }}>amar é um elo{'\n'}
entre o azul{'\n'}
e o amarelo{'\n'}</Text>
 
  </View>
  
  </View>

  );

}
export default App;
