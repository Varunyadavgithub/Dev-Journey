# NGINX Full Guide: From Zero to Hero

## 1. Introduction to NGINX

**What is NGINX?**

- NGINX (pronounced "engine-x") is a lightweight, high-performance web server.
- It also acts as a **reverse proxy**, **load balancer**, and **HTTP cache**.
- Designed for maximum performance and scalability using **event-driven architecture**.

**Why Use NGINX?**

- Handles thousands of simultaneous connections.
- Used by high-traffic websites (e.g., Netflix, Dropbox, WordPress.com).
- Efficient in serving static files, balancing loads, and acting as a reverse proxy.

---

## 2. Installing NGINX

### On Ubuntu/Debian:

```bash
sudo apt update
sudo apt install nginx
```

### On CentOS/RHEL:

```bash
sudo yum install epel-release
sudo yum install nginx
```

### Start & Enable NGINX:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Verify Installation:

```bash
nginx -v         # Check version
sudo systemctl status nginx  # Check status
```

---

## 3. Understanding NGINX File Structure

| Path                          | Description                           |
| ----------------------------- | ------------------------------------- |
| `/etc/nginx/`                 | Main configuration directory          |
| `/etc/nginx/nginx.conf`       | Main config file                      |
| `/etc/nginx/sites-available/` | Available site configs                |
| `/etc/nginx/sites-enabled/`   | Enabled sites (linked from available) |
| `/var/www/html/`              | Default web root directory            |
| `/var/log/nginx/`             | Access and error logs                 |

---

## 4. Basic NGINX Commands

| Command                        | Purpose                               |
| ------------------------------ | ------------------------------------- |
| `sudo systemctl start nginx`   | Start the server                      |
| `sudo systemctl stop nginx`    | Stop the server                       |
| `sudo systemctl restart nginx` | Restart the server                    |
| `sudo nginx -t`                | Test configuration for errors         |
| `sudo nginx -s reload`         | Reload configuration without downtime |

---

## 5. Configuration: Hello World Site

### Step 1: Create directory and index file

```bash
sudo mkdir -p /var/www/helloworld
sudo nano /var/www/helloworld/index.html
```

Add this HTML:

```html
<h1>Hello World from NGINX!</h1>
```

### Step 2: Create site configuration

```bash
sudo nano /etc/nginx/sites-available/helloworld
```

Paste:

```nginx
server {
    listen 80;
    server_name localhost;
    root /var/www/helloworld;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### Step 3: Enable site

```bash
sudo ln -s /etc/nginx/sites-available/helloworld /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 6. Serving Static Files

To serve static content like HTML, CSS, JS:

- Place files in your `root` directory (e.g. `/var/www/your-site`)
- Ensure your server block has:

```nginx
root /var/www/your-site;
index index.html;
```

---

## 7. Reverse Proxy Setup

Forwarding requests to a backend app (e.g., Node.js on port 3000):

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 8. Securing with SSL (HTTPS)

### Use Let’s Encrypt and Certbot

**Step 1: Install Certbot**

```bash
sudo apt install certbot python3-certbot-nginx
```

**Step 2: Generate SSL Certificates**

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**Step 3: Auto-Renew SSL**

```bash
sudo certbot renew --dry-run
```

---

## 9. Load Balancing with NGINX

### Example: Round Robin Load Balancing

```nginx
http {
    upstream myapp {
        server 127.0.0.1:3000;
        server 127.0.0.1:3001;
    }

    server {
        listen 80;
        location / {
            proxy_pass http://myapp;
        }
    }
}
```

---

## 10. Common Use Cases

| Use Case            | Description                                       |
| ------------------- | ------------------------------------------------- |
| Static File Hosting | Serve HTML, CSS, JS directly                      |
| Reverse Proxy       | Forward requests to app servers                   |
| Load Balancing      | Distribute traffic among multiple backend servers |
| SSL Termination     | Enable HTTPS using free SSL certificates          |

---

## 11. Logs and Monitoring

| Log Type   | Path                        |
| ---------- | --------------------------- |
| Access Log | `/var/log/nginx/access.log` |
| Error Log  | `/var/log/nginx/error.log`  |

### Monitor logs:

```bash
tail -f /var/log/nginx/access.log
journalctl -u nginx
```

---

## 12. Conclusion and Next Steps

🎯 **You're now equipped to:**

- Create and enable multiple sites.
- Serve static and dynamic content.
- Secure your web app with HTTPS.
- Scale your app using load balancing.

### Explore Next:

- Rate limiting
- Gzip compression
- Caching static assets
- NGINX Plus (commercial version)

---

## 📚 Resources

- [NGINX Official Documentation](https://nginx.org/en/docs/)
- [DigitalOcean Tutorials](https://www.digitalocean.com/community/tags/nginx)
- [Certbot Official Site](https://certbot.eff.org/)

---

> 🚀 Congratulations! You’re now well on your way to becoming an **NGINX Hero**.

