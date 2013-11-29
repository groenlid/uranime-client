
module('Acceptance - Index', {
    setup: function(){
        App.reset();
    }
});

test('index renders', function (){
    expect(1);

    visit('/').then(function (){
        equal(exists('h1'), true);
    });
});
