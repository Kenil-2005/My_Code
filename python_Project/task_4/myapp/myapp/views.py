from django.shortcuts import render
from django.db.models import Count
from .models import RequestLog

def log_dashboard(request):
    # Total counts grouped by is_error
    stats = (
        RequestLog.objects
        .values('is_error')
        .annotate(total=Count('id'))
    )

    success_count = 0
    error_count = 0

    for row in stats:
        if row['is_error']:
            error_count = row['total']
        else:
            success_count = row['total']

    # Optional: count by status code ranges (2xx, 3xx, 4xx, 5xx)
    status_buckets = {
        '2xx': 0,
        '3xx': 0,
        '4xx': 0,
        '5xx': 0,
    }

    for log in RequestLog.objects.all():
        code = log.status_code
        if 200 <= code < 300:
            status_buckets['2xx'] += 1
        elif 300 <= code < 400:
            status_buckets['3xx'] += 1
        elif 400 <= code < 500:
            status_buckets['4xx'] += 1
        elif 500 <= code < 600:
            status_buckets['5xx'] += 1

    context = {
        "success_count": success_count,
        "error_count": error_count,
        "status_labels": list(status_buckets.keys()),
        "status_values": list(status_buckets.values()),
    }
    return render(request, "myapp/log_dashboard.html", context)
