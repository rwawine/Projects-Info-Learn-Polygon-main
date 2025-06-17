import React from 'react';

const paginationStyles = {
    container: {
        borderColor: '#eaecf0',
        borderTopWidth: '1px',
        borderTopStyle: 'solid' as const,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '61px',
        paddingTop: '20px',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        gap: '16px',
        minWidth: '240px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    button: {
        backgroundColor: '#fff',
        border: '1px solid #1111111a',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        gap: '4px',
        width: '40px',
        height: '40px',
        minHeight: '40px',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingLeft: '12px',
        paddingRight: '12px',
        cursor: 'pointer',
    },
    buttonActive: {
        color: '#fff',
        backgroundColor: '#ef6c00',
        border: 'none',
        borderRadius: '4px',
        display: 'flex',
        alignSelf: 'stretch',
        gap: '4px',
        width: '40px',
        height: '40px',
        minHeight: '40px',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNumber: {
        color: '#111',
        backgroundColor: '#fff',
        border: '1px solid #1111111a',
        borderRadius: '4px',
        display: 'flex',
        alignSelf: 'stretch',
        gap: '4px',
        width: '40px',
        height: '40px',
        minHeight: '40px',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        aspectRatio: '1',
        objectFit: 'contain' as const,
        objectPosition: 'center',
        alignSelf: 'stretch',
        width: '16px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
};

export const Pagination: React.FC = () => {
    return (
        <nav style={paginationStyles.container}>
            <div style={paginationStyles.pagination}>
                <button style={paginationStyles.button} aria-label="Previous page">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f692c948a704382a1ba5ca3bbb75378b44e999a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                        alt="Previous"
                        style={paginationStyles.icon}
                    />
                </button>
                <button style={paginationStyles.buttonActive}>
                    1
                </button>
                <button style={paginationStyles.buttonNumber}>
                    2
                </button>
                <button style={paginationStyles.buttonNumber}>
                    3
                </button>
                <button style={paginationStyles.buttonNumber}>
                    4
                </button>
                <button style={paginationStyles.buttonNumber}>
                    5
                </button>
                <button style={paginationStyles.button} aria-label="Next page">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a31d2e596f519d628040c161f227004d3164f5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                        alt="Next"
                        style={paginationStyles.icon}
                    />
                </button>
            </div>
        </nav>
    );
};
