import React from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';


export const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchNews = () => {
    setIsLoading(true);
    const getNews = async () => {
      const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_3342918e36758f42d7cda1b36e8693c19f9c4&country=us&language=en&category=business,health,politics,science,technology");
      const data = await response.json()
      setItems(data.results)
    }
    getNews()
    setIsLoading(false)
  }

  React.useEffect(fetchNews, [])

  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large'/>
        <Text style={{marginTop: 15}}>Loading...</Text>
      </View>
  )}
  
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.article_id, title: item.title, image: item.image_url, content: item.content })}>
            <Post title={item.title} imageUrl={item.image_url} createdAt={item.pubDate}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
