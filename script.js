// チケットデータ
const tickets = [
    { id: 1, name: 'コンサート A', date: '2024-08-15', available: true },
    { id: 2, name: 'コンサート B', date: '2024-08-16', available: true },
    { id: 3, name: 'コンサート C', date: '2024-08-15', available: false },
    { id: 4, name: 'コンサート D', date: '2024-08-17', available: true }
];

// 初期表示：購入可能なチケットのみ表示
function loadTickets() {
    tickets.forEach(ticket => {
        if (ticket.available) {
            addTicketToDOM(ticket);
        }
    });
}

// 日付によるフィルター
function filterTickets() {
    const selectedDate = document.getElementById('ticketDate').value;
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    
    tickets.forEach(ticket => {
        if (ticket.date === selectedDate && ticket.available) {
            addTicketToDOM(ticket);
        }
    });
}

function addTicketToDOM(ticket) {
    const ticketDiv = document.createElement('div');
    ticketDiv.className = 'ticket-item';
    
    const ticketInfo = document.createElement('span');
    ticketInfo.innerHTML = `${ticket.name} - ${ticket.date}`;

    const favButton = document.createElement('button');
    favButton.innerHTML = '登録する！';
    favButton.className = 'fav-button';
    favButton.onclick = function() {
        toggleFavorite(favButton);
    };
    favButton.onmouseover = function() {
        mouseOverEffect(favButton);
    };

    ticketDiv.appendChild(favButton);
    ticketDiv.appendChild(ticketInfo);
    document.getElementById('ticketList').appendChild(ticketDiv);
}

// お気に入りボタンの切り替え
function toggleFavorite(button) {
    if (button.innerHTML === '登録する！') {
        button.innerHTML = '登録済み！';
        button.style.backgroundColor = 'pink';
    } else {
        button.innerHTML = '登録する！';
        button.style.backgroundColor = '';
    }
}

// マウスオーバーでの効果
function mouseOverEffect(button) {
    let originalColor = button.style.backgroundColor;

    const blinkTimer = setInterval(function() {
            button.style.backgroundColor = button.style.backgroundColor === 'pink' ? originalColor : 'pink';
    }, 300);
    
    button.onmouseleave = function() {
        clearInterval(blinkTimer);
        button.style.backgroundColor = button.innerHTML == '登録済み！' ? 'pink' : '';
    };
}