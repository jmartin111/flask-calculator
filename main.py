from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def entry():
    return render_template('user_input.html')


if __name__ == "__main__":
    app.run(debug=True)
