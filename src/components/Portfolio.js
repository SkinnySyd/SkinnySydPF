import { Box, Grid, Card, Typography } from '@mui/material';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    // Add more projects here
  ];

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontFamily: 'Orbitron, sans-serif' }}>
        My Portfolio
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              padding: '20px',
              backgroundColor: '#2e2e2e',
              color: '#fff',
              borderRadius: '16px',
              boxShadow: '0px 8px 16px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' },
            }}>
              <Typography variant="h6" sx={{ mb: 2 }}>{project.title}</Typography>
              <Typography>{project.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
