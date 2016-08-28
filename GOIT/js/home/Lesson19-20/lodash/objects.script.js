$(function(){
  var skills = [];
      skills = _.map(objects, 'skills'); 
      skills = _.flatten(skills); 
      skills = _.uniq(skills); 
      skills = _.sortBy(skills); 
      console.log('Массив скиллов всех людей, без повторений, отсортированы по алфавиту =', skills);

  var name = [];
      name = _.sortBy(objects, 'friends'); 
      name = _.map(name, 'name'); 
      name = _.uniq(name) 
      console.log('Массив имен людей, отсортированных в зависимости от количества их друзей =', name);

  var friends = [];
      friends = _.map(objects, 'friends'); 
      friends = _.flatten(friends); 
      friends = _.map(friends, 'name') 
      friends = _.uniq(friends); 
      console.log('Массив всех друзей всех пользователей, не должно быть повторяющихся людей =', friends);
});

