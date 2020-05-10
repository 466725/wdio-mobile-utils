import { Selector } from './selector';
import { Type } from './type';

describe('Selector', function () {
    const VALUE = 'TEST VALUE';

    describe('type', function () {
        it.each`
            type               | androidClassName             | iosType
            ${Type.LABEL}      | ${'android.widget.TextView'} | ${'XCUIElementTypeStaticText'}
            ${Type.BUTTON}     | ${'android.widget.Button'}   | ${'XCUIElementTypeButton'}
            ${Type.TEXT_FIELD} | ${'android.widget.EditText'} | ${'XCUIElementTypeTextField'}
        `(
            'should return type selector with className "$androidClassName" for Android and type "$iosType" for iOS for enum type "$type"',
            ({ type, androidClassName, iosType }) => {
                const selector = Selector.type(type);
                expect(selector.android()).toBe(
                    `.className("${androidClassName}")`
                );
                expect(selector.ios()).toBe(`type == '${iosType}'`);
            }
        );

        it('should throw an exception if the type is not implemented', function () {
            expect(() =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore to force a non-existing type
                Selector.type('awdawjife434637863787h8tefwef')
            ).toThrowError('Type not implemented!');
        });
    });

    describe('text', function () {
        const selector = Selector.text(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.text("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`label == '${VALUE}'`);
        });
    });
    describe('textContains', function () {
        const selector = Selector.textContains(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.textContains("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`label CONTAINS '${VALUE}'`);
        });
    });
    describe('textMatches', function () {
        const selector = Selector.textMatches(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.textMatches("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`label MATCHES '${VALUE}'`);
        });
    });
    describe('textStartsWith', function () {
        const selector = Selector.textStartsWith(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.textStartsWith("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`label BEGINSWITH '${VALUE}'`);
        });
    });

    describe('accessibilityId', function () {
        const selector = Selector.accessibilityId(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.description("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`name == '${VALUE}'`);
        });
    });
    describe('accessibilityIdContains', function () {
        const selector = Selector.accessibilityIdContains(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.descriptionContains("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`name CONTAINS '${VALUE}'`);
        });
    });
    describe('accessibilityIdMatches', function () {
        const selector = Selector.accessibilityIdMatches(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(`.descriptionMatches("${VALUE}")`);
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`name MATCHES '${VALUE}'`);
        });
    });
    describe('accessibilityIdStartsWith', function () {
        const selector = Selector.accessibilityIdStartsWith(VALUE);

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe(
                `.descriptionStartsWith("${VALUE}")`
            );
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe(`name BEGINSWITH '${VALUE}'`);
        });
    });

    describe('enabled', function () {
        const selector = Selector.enabled();

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe('.enabled(true)');
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe('enabled == 1');
        });
    });
    describe('disabled', function () {
        const selector = Selector.disabled();

        it('should return the selector for Android when ".android()" is called', function () {
            expect(selector.android()).toBe('.enabled(false)');
        });

        it('should return the selector for iOS when ".ios()" is called', function () {
            expect(selector.ios()).toBe('enabled == 0');
        });
    });
});
