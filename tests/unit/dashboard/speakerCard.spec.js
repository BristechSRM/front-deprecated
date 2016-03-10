describe('speakerCard', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    var speaker = {
        "name":"Thomas Hull",
        "title":"To know javascript is to love javascript",
        "rating":5,
        "admin":"David Wybourn",
        "adminImageUrl":"https://placebear.com/50/50",
        "lastContacted":"1970-01-01T00:00:00",
        "speakerStatus":1
    };

    function compileElement(speaker) {
        $rootScope.speaker = speaker;
        var html = "<speaker-card speaker=\"speaker\"></speaker-card>";
        var element = $compile(html)($rootScope);
        $rootScope.$digest();
        return element;
    }

    it("statusToCssClass returns unassigned by default", function() {
        var element = compileElement(speaker);
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.statusToCssClass()).toBe("unassigned");
    });

    it("statusToCssClass returns unassigned if given unrecognised status", function() {
        var element = compileElement(speaker);
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.statusToCssClass(1000)).toBe("unassigned");
    });

    it("statusToCssClass returns specified status class", function() {
        var element = compileElement(speaker);
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.statusToCssClass(3)).toBe("deferred");
    });
});
