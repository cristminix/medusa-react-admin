
import { useRecordContext } from 'react-admin';
import { Box, Typography } from '@mui/material';

const MetadataField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record || !record[source]) return null;

    const metadata = record[source];

    // Ensure metadata is an object and not null
    if (typeof metadata !== 'object') return null;

    const keys = Object.keys(metadata);

    if (keys.length === 0) return null;

    return (
        <Box display="flex" flexDirection="column" gap={0.5}>
            {keys.map((key) => (
                <Box key={key} display="flex" alignItems="center" gap={0.5}>
                    <Typography variant="caption" fontWeight="bold" color="textSecondary" sx={{ whiteSpace: 'nowrap' }}>
                        {key}:
                    </Typography>
                    <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>
                        {typeof metadata[key] === 'object'
                            ? JSON.stringify(metadata[key])
                            : String(metadata[key])}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default MetadataField;
