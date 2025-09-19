# app.py
from flask import Flask, render_template
from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        'name': 'Mohamed Ahmed',
        'username': 'mot204t',
        'age': 17,
        'country': 'Egypt',
        'hobbies': ['Programming', 'Gaming', 'Watching Movies'],
        'languages': ['C++', 'Python', 'JavaScript', 'CSS', 'HTML'],
        'spoken_languages': ['Arabic', 'English'],
        'projects': [
            {'name': 'AnuCrypt', 'status': 'In Progress'},
            {'name': 'Malwarebytes License Resetter', 'status': 'Completed'}
        ],
        'currently_working': 'AnuCrypt',
        'games': [
            'Nier Automata', 'Cyberpunk 2077', 'Diablo IV', 'Dying Light',
            'Rise of the Tomb Raider', 'Resident Evil 3 Remake',
            'Call of Duty 4 Modern Warfare', 'Call of Duty Modern Warfare 2',
            'Call of Duty Modern Warfare Cold War', 'Call of Duty Modern Warfare 2019'
        ],
        'learning': ['C', 'C#'],
        'os': {
            'windows': ['Windows 10', 'Windows 11'],
            'linux': {
                'os': 'Arch Linux',
                'kernel': 'linux 6.12.38-1-lts',
                'vm': 'Hyprland (Wayland)',
                'shell': 'Fish',
                'terminal': 'Kitty'
            },
            'other': ['MS-DOS', 'FREE-BSD']
        },
        'editors': {
            'terminal': [
                {'name': 'Vim'},
                {'name': 'Nano'}
            ],
            'gui': [
                {'name': 'Zed'},
                {'name': 'Visual Studio Code'}
            ],
            'ides': [
                {'name': 'Visual Studio'},
                {'name': 'PyCharm'}
            ]
        },
        'specs': {
            'cpu': 'Ryzen 3 PRO 2200G 3.5Ghz',
            'gpu': 'AMD Radeon Vega 8 2GB (iGPU)',
            'ram': '16GB 3200Mhz CL16',
            'storage': [
                'Lexar NM620 512GB M.2',
                'HikVision C100 120GB 2.5 SSD',
                'Western Digital Black 500GB 3.5 HDD',
                'Toshiba 500GB 2.5 HDD',
                'Seagate 500GB 2.5 HDD'
            ],
            'display': 'Samsung SyncMaster S19B00B 1366x768px 60hz',
            'keyboard': 'Tezarre TK63 with Pudding Keycaps',
            'mouse': 'Aula F805',
            'headset': 'Onikuma K16'
        }
    }
    return render_template('index.html', data=data)

# Add a health check endpoint for Render
@app.route('/health')
def health():
    return {'status': 'healthy'}, 200

# Add error handlers with proper data structure
@app.errorhandler(404)
def not_found(error):
    # Provide minimal data structure for error pages
    error_data = {
        'username': 'mot204t'
    }
    return render_template('index.html', data=error_data), 404

@app.errorhandler(500)
def internal_error(error):
    # Provide minimal data structure for error pages
    error_data = {
        'username': 'mot204t'
    }
    return render_template('index.html', data=error_data), 500

@app.route('/.well-known/discord')
def serve_discord_file():
    return send_from_directory('static/.well-known', 'discord')

if __name__ == '__main__':
    # Use the PORT environment variable for Render deployment
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port, debug=False)