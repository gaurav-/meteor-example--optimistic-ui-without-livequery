Meteor.publish('nonReactiveLikeable', function ({ _id }) {
  Likeables.find(_id).forEach(
    doc => this.added(Likeables._name, _id, doc)
  );
  this.ready();
})