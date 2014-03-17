var chrome = {
    browserAction:{
        onClicked:{
            addListener:function(){}
        },
        setIcon:function(){},
        setBadgeText:function(obj){ return obj.text}
    },
    extension:{onMessage:{addListener:function(){}}}
}

describe("Content", function() {

    describe("Test", function() {
        it("true",function(){
            expect( 100 ).toEqual( '100' );
        })
    })

});