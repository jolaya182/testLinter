server{
	listen:80;
	listen[::]:80;
	
	root /var/www/guitarxoo.com/html;
	index index.html index.htm index.nginx-debian.html;

	server_name guitarxoo.com www.guitarxoo.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
