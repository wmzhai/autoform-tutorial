

Template.posts.helpers({
  posts: function(){
    return Posts.find();
  },

  categories: function(){
    return[
      {label: "Business", value: "business"},
      {label: "Health", value: "health"},
      {label: "Finance", value: "finance"}
    ];
  }
})