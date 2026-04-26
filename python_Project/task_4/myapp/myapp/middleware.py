import traceback
from .models import RequestLog

class RequestLogMiddleware:
    """
    Custom middleware to log every request/response pair
    and mark whether it resulted in an error.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Call the next middleware / view
        response = self.get_response(request)

        # Determine if this is an error response
        is_error = response.status_code >= 400

        try:
            RequestLog.objects.create(
                method=request.method,
                path=request.path[:255],  # truncate if too long
                status_code=response.status_code,
                is_error=is_error,
            )
        except Exception:
            # Avoid breaking the site if logging fails
            pass

        return response

    def process_exception(self, request, exception):
        """
        This is called only when an unhandled exception occurs.
        We can log the error information here too.
        """
        try:
            RequestLog.objects.create(
                method=request.method,
                path=request.path[:255],
                status_code=500,
                is_error=True,
                error_message="".join(
                    traceback.format_exception(type(exception), exception, exception.__traceback__)
                ),
            )
        except Exception:
            pass

        # Returning None lets Django handle the exception as usual.
        return None
