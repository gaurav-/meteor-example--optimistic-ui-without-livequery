Meteor.methods({
  like(_id) { // isomorphic; local simulation for "optimistic UI"
    Likeables.update(_id, { $inc: { likes: 1 } });
    return true;
  }
});