describe('optIn', function () {

    var scope,
        element,
        compiled,
        html,
        heading,
        description,
        edit;

    beforeEach(module("myApp"));
    beforeEach(module("editable.html"));
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        heading = "Fasting is Stupid!";
        description = "My tummy is growling. I haven’t eaten all day. There is food around the house, but I will not eat it. My body is but a vessel. My mind is strong. I am doing this to show that I have discipline, that I have faith. I feel kinda dizzy.";
        edit = "<h2>" + heading + "</h2><p>" + description + "</p>";
        html = "<opt-in>" + edit + "</opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render element and contain the heading and description', function () {
        expect(element.html()).toContain(heading);
        expect(element.html()).toContain(description);
    })
});
