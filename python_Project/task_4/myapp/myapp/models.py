from django.db import models

class RequestLog(models.Model):
    method = models.CharField(max_length=10)
    path = models.CharField(max_length=255)
    status_code = models.IntegerField()
    is_error = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    # Optional: store exception message if any
    error_message = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.method} {self.path} -> {self.status_code}"

