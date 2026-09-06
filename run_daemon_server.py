import os
import sys
import socket
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class DualStackServer(ThreadingHTTPServer):
    address_family = socket.AF_INET6 if socket.has_ipv6 else socket.AF_INET
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        if hasattr(socket, 'IPV6_V6ONLY'):
            try:
                self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
            except Exception:
                pass
        super().server_bind()

def daemonize():
    if os.fork() > 0:
        sys.exit(0)
    os.setsid()
    if os.fork() > 0:
        sys.exit(0)
    
    os.chdir('/Users/jiangsheng/VibeCoding/ai-product-portfolio')
    
    with open('/dev/null', 'r') as devnull_r, open('/tmp/server_out.log', 'a') as devnull_w:
        os.dup2(devnull_r.fileno(), sys.stdin.fileno())
        os.dup2(devnull_w.fileno(), sys.stdout.fileno())
        os.dup2(devnull_w.fileno(), sys.stderr.fileno())

    server = DualStackServer(('::', 3000), NoCacheHandler)
    server.serve_forever()

if __name__ == '__main__':
    daemonize()
