const candidates = [
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?w=800&auto=format&fit=crop&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9OJQxdHRH1YTXRl-3CQmJ7-J71F3JvEVbWaGsX6OBg&s=10'
];

async function check() {
  for (const url of candidates) {
    try {
      const res = await fetch(url);
      console.log(res.status, url);
    } catch (e) {
      console.log('ERR', url);
    }
  }
}

check();
