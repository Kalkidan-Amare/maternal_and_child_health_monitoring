<h2>On Windows</h2>

<pre>
<code>
python -m venv venv
venv\Scripts\activate
</code>
</pre>

<h2>On macOS/Linux</h2>

<pre>
<code>
python3 -m venv venv
source venv/bin/activate
</code>
</pre>

<h2>Install Requirements</h2>

<pre>
<code>
pip install -r requirements.txt
</code>
</pre>

<h2>Run Migrations</h2>

<pre>
<code>
python manage.py makemigrations basicinfos
python manage.py makemigrations mothers
python manage.py makemigrations children
python manage.py migrate
</code>
</pre>

<h2>Run Server</h2>

<pre>
<code>
python manage.py runserver
</code>
</pre>

<h2>API Endpoints</h2>

<p>
  <a href="http://127.0.0.1:8000/basicinfos">Basic Information Endpoint</a><br>
  <a href="http://127.0.0.1:8000/children">Children Endpoint</a><br>
  <a href="http://127.0.0.1:8000/mothers">Mothers Endpoint</a><br>
</p>
