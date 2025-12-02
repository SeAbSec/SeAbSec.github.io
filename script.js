Vous avez envoyé
// Hero Terminal Typing
const terminal = document.getElementById('terminal-hero');
const text = `root@kali:~# whoami
Your Name
Offensive Security Engineer | OSCP | Burp Certified
Currently exploiting: banks, fintechs, and bad ideas
I don’t knock. I find the open windows.
Available for remote pentest contracts`;
let i = 0;
const type = () => {
    if (i < text.length) {
        terminal.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    } else {
        terminal.innerHTML += '<span class="blink">|</span>';
    }
};
type();

// Mobile Surprise (already in CSS, but confirm)
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Extra line added in CSS
}

// Secret Terminal
const trigger = document.getElementById('trigger');
const overlay = document.getElementById('secret-terminal');
let history = ['Welcome, root. Type "help" for commands.'];
trigger.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    updateOutput();
});
const updateOutput = () => {
    overlay.querySelector('.output').innerHTML = history.map(line => <div>${line}</div>).join('');
};
const input = document.createElement('input');
overlay.querySelector('.input').appendChild(input);
input.focus();
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value;
        history.push(> ${cmd});
        let output = '';
        switch (cmd.toLowerCase()) {
            case 'help': output = 'whoami | neofetch | nmap | sudo rm -rf / | rickroll | hire me | exit'; break;
            case 'whoami': output = 'Ethical hacker: Your Name - OSCP Certified'; break;
            case 'neofetch': output = 'OS: Kali | CPU: i9 | RAM: 64GB'; break;
            case 'nmap': output = '1337 ports open | Services: exploit(443)'; break;
            case 'sudo rm -rf /': output = 'Nice try. Access denied. 😈'; break;
            case 'rickroll': window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); output = 'Never gonna...'; break;
            case 'hire me': window.open('https://calendly.com/yourname'); output = 'Booking now! 💰'; break;
            case 'exit': overlay.classList.add('hidden'); input.value = ''; return;
            default: output = 'Command not found.';
        }
        history.push(output);
        updateOutput();
        input.value = '';
    }
});

// Glitch on Hover
document.querySelectorAll('.glitch').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const vuln = card.dataset.vuln;
        console.log(Exploiting: ${vuln}); // Fun console log
    });
});

// Contact Form (fake encryption)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message encrypted with AES-256. Reply in <24h. (Fake for demo — use Formspree for real emails)');
});

// Achievements (simple localStorage)
if (!localStorage.getItem('visited')) {
    alert('Achievement Unlocked: Found the portfolio +50 XP');
    localStorage.setItem('visited', 'true');
}