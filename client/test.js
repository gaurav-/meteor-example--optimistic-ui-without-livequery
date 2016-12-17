// Tracker.autorun(function () {
  const sub = Meteor.subscribe('nonReactiveLikeable', { _id: 'abc' }, {
    onReady() {
      console.log('initial likes for abc:', Likeables.findOne('abc').likes);
      Meteor.call('like', 'abc',
        (err, result) => err ? console.error(err) : console.log('result:', result)
      );
      console.log('local document after method call (optimistic ui):', Likeables.findOne('abc')); // likes: 1
    },
    onStop(e) {
      if (e) console.error(e);
    }
  });
// });
