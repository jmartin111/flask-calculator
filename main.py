from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def entry():
    return render_template('user_input.html')


@app.route('/results', methods=['POST', 'GET'])
def square_me():
    if request.method == 'POST':
        response = {
            "num1": int(request.form['num1']),
            "num2": int(request.form['num2']),
            "operators": request.form["operators"]
        }
        return render_template("results.html", response=response)


if __name__ == "__main__":
    app.run(debug=True)
