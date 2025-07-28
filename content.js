function onDOMLoaded() {
    var baseUrl = window.location.protocol + '//' + window.location.hostname + '/';

    var urlExtensions = {
        inventory: {name: 'My Inventory', href: '?l=2&a=1'},
        homeInventory: {name: 'Home Inventory', onClick: 'RAR.Popup.affichePopupInventairePropriete();'},
        homeProperty: {name: 'Property', onClick: 'RAR.Popup.affichePopupMesBiens();'},
        market: {name: 'Market', href: '?l=6'}
    };

    // var insertDiv = document.querySelector('div.zoneAAP');
    var insertDiv = document.querySelector('div.zone_menu');
    if (insertDiv) {
        insertDiv = insertDiv.querySelector('div.elementRepeat');

        // Remove extra content and style
        var unwantedDiv = insertDiv.querySelector('div.zoneAAP');
        unwantedDiv.className = '';
        while (unwantedDiv.firstChild) {
            unwantedDiv.removeChild(unwantedDiv.firstChild);
        }

        unwantedDiv.id = 'js-rk-sidebar';

        for (var key in urlExtensions) {
            var link = document.createElement('a');
            link.className = 'btns';
            if ('onClick' in urlExtensions[key]) {
                link.setAttribute('onclick', urlExtensions[key].onClick);
            } else {
                link.href = urlExtensions[key].href;
            }

            var div1 = document.createElement('div');
            div1.className = 'notificationGeneric';
            link.appendChild(div1);

            var div2 = document.createElement('div');
            div2.className = 'ui_element_bloqueCadenas';
            link.appendChild(div2);

            var span = document.createElement('span');
            span.innerHTML = urlExtensions[key].name;
            span.className = 'btnsMenu_Texte';
            link.appendChild(span);

            unwantedDiv.appendChild(link);
        }
        // helperDiv.appendChild(list);
        // unwantedDiv.appendChild(list);
    }
}

if (document.readyState === 'loading') {
    // Still loading, wait for the event
    document.addEventListener('DOMContentLoaded', onDOMLoaded);
} else {
    // DOM is already ready
    onDOMLoaded();
}
