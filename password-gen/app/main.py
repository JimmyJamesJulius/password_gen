from flask import Flask, render_template, request, jsonify
import secrets, string

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    length = int(data.get('length', 12))
    alphabet = string.ascii_letters + string.digits + string.punctuation
    pwd = ''.join(secrets.choice(alphabet) for _ in range(length))
    return jsonify({'password': pwd})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

