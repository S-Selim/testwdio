it('Dynamic Dropdown Controls',() => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    $('#autocomplete').setValue('ind');
    browser.pause(3000);
    let items = $$('[class="ui-menu-item"] div');
    for(var i=0;i<items.length;i++){
        if(items[i].getText() === 'India'){
            items[i].click();
            //browser.pause(3000)
        }
    }
}